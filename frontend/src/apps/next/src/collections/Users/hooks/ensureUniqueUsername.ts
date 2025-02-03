import type { FieldHook } from "payload"
import { ValidationError } from "payload";
import type { User } from "@/payload-types";

import { getUserTenantIDs } from "../../../utilities/getUserTenantIDs";

export const ensureUniqueUsername: FieldHook<User> = async ({
  data,
  originalDoc,
  req,
  value,
}) => {
  // if value is unchanged, skip validation
  if (originalDoc?.username === value) {
    return value;
  }

  const incomingTenantIds =
    data?.tenants?.map((entry) => entry.id as any as number).join(",") || "";
  const currentTenantIds =
    originalDoc?.tenants?.map((entry) => entry.id as any as number).join(",") ||
    "";

  const tenantIDToMatch =
    incomingTenantIds.length > 0 ? incomingTenantIds : currentTenantIds;

  const findDuplicateUsers = await req.payload.find({
    collection: "users",
    where: {
      and: [
        {
          "tenants.tenant": {
            in: tenantIDToMatch,
          },
        },
        {
          username: {
            equals: value,
          },
        },
      ],
    },
  });

  if (findDuplicateUsers.docs.length > 0 && req.user) {
    const tenantIDs = getUserTenantIDs(req.user);
    // if the user is an admin or has access to more than 1 tenant
    // provide a more specific error message
    if (req.user.roles?.includes("super-admin") || tenantIDs.length > 1) {
      const attemptedTenantChange = await req.payload.findByID({
        id: tenantIDToMatch,
        collection: "tenants",
      });

      throw new ValidationError({
        errors: [
          {
            message: `The "${attemptedTenantChange.name}" tenant already has a user with the username "${value}". Usernames must be unique per tenant.`,
            path: "username",
          },
        ],
      });
    }

    throw new ValidationError({
      errors: [
        {
          message: `A user with the username ${value} already exists. Usernames must be unique per tenant.`,
          path: "username",
        },
      ],
    });
  }

  return value;
};
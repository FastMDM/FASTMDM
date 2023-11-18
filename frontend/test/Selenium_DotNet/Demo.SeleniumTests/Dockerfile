FROM mcr.microsoft.com/dotnet/sdk:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Demo.SeleniumTests.csproj", "meanmine.com/"]
RUN dotnet restore "meanmine.com/Demo.SeleniumTests.csproj"
COPY . "meanmine.com/"
WORKDIR "/src/meanmine.com"
RUN dotnet build "Demo.SeleniumTests.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Demo.SeleniumTests.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "test", "Demo.SeleniumTests.dll", "--logger", "trx", "--results-directory", "TestResults", "--", "MSTest.Parallelize.Workers=8", "MSTest.Parallelize.Scope=ClassLevel"]


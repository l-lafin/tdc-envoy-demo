# Build dummy api service
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build

RUN apt-get update && \
    apt-get install --no-install-recommends -y unzip && \
    rm -rf /var/lib/apt/lists/* && \
    curl -sSL https://aka.ms/getvsdbgsh | /bin/sh /dev/stdin -v latest -l /vsdbg

WORKDIR /app

ARG PATH_TO_PROJECT=services/dummy-backend/
COPY ${PATH_TO_PROJECT}/. ${PATH_TO_PROJECT}/

RUN dotnet restore ${PATH_TO_PROJECT}

HEALTHCHECK --interval=10s --timeout=3s --start-period=90s --retries=3 \
    CMD curl --fail http://localhost:9090/health || exit 1

# Publish dummy api service
FROM build AS publish
RUN dotnet publish --configuration Release --runtime linux-musl-x64

# Execute dummy api service
FROM mcr.microsoft.com/dotnet/core/runtime-deps:3.1.3-alpine3.11 AS runtime
WORKDIR /app

COPY --from=publish /app/services/dummy-backend/bin/Release/netcoreapp3.1/linux-musl-x64/publish/ .

# Metrics port
EXPOSE 9090
# Application port
EXPOSE 8080

ENTRYPOINT ["dotnet", "dummy-backend.dll"]
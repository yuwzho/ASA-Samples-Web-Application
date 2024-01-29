export interface ApiConfig {
    baseUrl: string
}

export interface ObservabilityConfig {
    connectionString: string
}

export interface AppConfig {
    api: ApiConfig
    observability: ObservabilityConfig
}

const config: AppConfig = {
    api: {
        baseUrl: window.ENV_CONFIG.REACT_APP_API_BASE_URL || '.'
    },
    observability: {
        connectionString: window.ENV_CONFIG.REACT_APP_APPLICATIONINSIGHTS_CONNECTION_STRING || ''
    }
}

console.log(config)

export default config;
import application from './app'
import config from './configuration/app.config'

application.listen(config.port, () => {
    console.log(`server listening on port ${config.host}:${config.port}...`);
})
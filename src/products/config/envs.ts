import 'dotenv/config'
import * as joi from 'joi'

/// 1) Definir interface de nuestras variables
interface EnvVars{
    PORT: number;
}


//Validar mediante un esquema, porque si yo mando algo invalido el servicio andará mal 
const envsSchema = joi.object({
    // numero y obligatoria
    PORT: joi.number().required(),
})
.unknown(true) // esto significa que podemos definir otras variables si que estén especificadas aca 

// obtener info sobre nuestro esquema
const { error, value } = envsSchema.validate(process.env)


// Si queremos que la app no se inicie debemos de mandar un error
if (error) {
    throw new Error(`Config validation error: ${error.message}`)
}

///2) Aplicar interfaz
const envVars: EnvVars = value


export const envs = {
    port: envVars.PORT,
}
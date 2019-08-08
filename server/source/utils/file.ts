import fs from 'fs'
export function toJson(data: {}) {
    return JSON.stringify(data, null, 2);
}
export async function readFile(archiveName: string) {
    try {
        const data = await fs.readFileSync(archiveName);
        return data.toString()
    } catch (error) {
        return {
            'error': true,
            'message': 'failed to read file',
            'thrownError': error
        };
    }
}
export async function writeFile(archiveName: string, data: string | JSON) {
    try {
        await fs.writeFileSync(archiveName, data);
    } catch (error) { return error }
}
export async function openFile(archiveName: string, flag: string) {
    try {
        await fs.openSync(archiveName, flag);
    } catch (error) { return error }
}
export async function appendFile(archiveName: string, data: string | JSON) {
    try {
        await fs.appendFileSync(archiveName, data);
    } catch (error) { return error }
}
export async function saveObject(object: {}, archiveName: string) {
    const objectJson = toJson(object);
    openFile(archiveName, 'w').then().catch(error => {
        return {
            'error': true,
            'message': 'failed to open file',
            'thrownError': error
        };
    })
    const data = readFile(archiveName).then().catch(error=>{
        return {
            'error': true,
            'message': 'failed to read file',
            'thrownError': error
        };
    })
    if (!data)
        writeFile(archiveName, objectJson).then().catch(error => {
            return {
                'error': true,
                'message': 'failed to write file',
                'thrownError': error
            };
        })
    else
        appendFile(archiveName, objectJson).then().catch(error => {
            return {
                'error': true,
                'message': 'failed to append file',
                'thrownError': error
            };
        })

    return {
        'error': false,
        'message': 'object created and saved'
    };
}
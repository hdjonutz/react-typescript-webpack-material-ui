// To allow importing less files to access class names
declare module '*.less' {
    const content: {[key: string]: string};
    export default content;
}

// To allow importing svg files to access their file path
declare module '*.svg' {
    const url: string;
    export default url;
}

// To allow importing mp3 files to access their file path
declare module '*.mp3' {
    const url: string;
    export default url;
}

// To allow importing json files directly
declare module '*.json' {
    const data: any;
    export default data;
}

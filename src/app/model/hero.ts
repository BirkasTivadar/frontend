export interface Hero {
    id?: number;
    name: string;
    address: string;
    superpower: string;
}

export class superPowers {
    static list: string[] = [
        "magnetic",
        "really smart",
        "rich",
        "hard",
        "biking"
    ];
}

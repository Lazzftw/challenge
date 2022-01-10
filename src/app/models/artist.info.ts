export class Info {
    name!: string;
    image!: [{
        'size': string,
        '#text': string,
        }];
    stats!: {    
        'listeners': number;
        'playcount': number;}
    bio!:{
        'content': string,
        'published': string,
        'summary': string
    }
    url!: string;
    }
import {NUM, SP, TOKEN} from "../regex-helpers";
import {Line} from "./line";

export type MediaType = 'audio' | 'video' | 'application';

/**
 * Definition of a media description as defined by https://datatracker.ietf.org/doc/html/rfc4566#section-5.14
 *
 * Ex: m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 127
 */
export class MediaLine extends Line {
    type: MediaType;
    port: number;
    protocol: string;
    formats: Array<string>

    private static MEDIA_TYPE = 'audio|video|application';
    private static regex: RegExp = new RegExp(`^(${this.MEDIA_TYPE}) (${NUM}) (${TOKEN}) ((?:${NUM}${SP}?)*)`);

    constructor(
        type: MediaType,
        port: number,
        protocol: string,
        formats: Array<string>
    ) {
        super();
        this.type = type;
        this.port = port;
        this.protocol = protocol;
        this.formats = formats;
    }

    static fromSdpLine(line: string): MediaLine | undefined {
        if (!MediaLine.regex.test(line)) {
            return undefined;
        }
        const tokens = line.match(MediaLine.regex) as RegExpMatchArray;
        const type = tokens[1] as MediaType;
        const port = parseInt(tokens[2]);
        const protocol = tokens[3];
        const formats = tokens[4].split(' ');
        return new MediaLine(type, port, protocol, formats);
    }

    toSdpLine(): string {
        return `m=${this.type} ${this.port} ${this.protocol} ${this.formats.join(' ')}`;
    }
}

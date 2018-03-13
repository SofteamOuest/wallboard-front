export default class BusLine
{
    constructor(line, direction) {
        this.id = line + direction
        this.line = line
        this.direction = direction
    }
}
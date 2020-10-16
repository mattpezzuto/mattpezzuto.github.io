import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class Creature {
    readonly name: string;
    readonly life: number;
    readonly attack: number;
    readonly speed: number;
    readonly image: string;

    private currentSpeed: number;
    currentLife: number;

    constructor(name, life, attack, speed, image) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.speed = speed;
        this.image = '../assets/img/' + image;
        this.currentSpeed = speed;
        this.currentLife = life;
    }

    public getCurrentSpeed(): number {
        return this.currentSpeed;
    }

    public setCurrentSpeed(value:number) {
        this.currentSpeed = value;
    }

    public preCombat(): void {
        this.currentSpeed = this.speed;
        this.currentLife = this.life;

    }

    public getCopy(): Creature {
        var value: Creature;
        value = new Creature(this.name, this.life, this.attack, this.speed, this.image);
        return value;
    }

    public incrementSpeed() {
        this.currentSpeed += this.speed;
    }

}
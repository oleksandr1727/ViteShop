import { CheckboxProps } from "rc-checkbox";

export interface InfoModel {
    id: number;
    date: Date;
    time: string;
    location: string;
    addres: string;
    anyPeoplesDamage: boolean;
    anyTransportDamage: boolean;
    firstName: string;
    adres: string;
    phoneNumber: string;
}

export type InfoFormField = {
    id: number;
    name:string;
    date: Date;
    time: string;
    location: string;
    addres: string;
    anyPeoplesDamage: boolean;
    anyTransportDamage: boolean;
    firstName: string;
    adres: string;
    phoneNumber: string
};

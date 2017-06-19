export class Mcgroup {
    GROUPCODE: string;
    GROUPNAME: string;
    GROUPNAME_FULL: string;
    ST: string;
    D_UPDATE: string;
    CID_SAVECODE: string;

}

export class Mctype {
    ID: string;
    GROUPCODE: string;
    TYPECODE: string;
    TYPENAME: string;
    TYPECODE_FULL: string;
    D_UPDATE: string;
    CID_SAVECODE: string;
}

export class Mcattribute {
    ID: string;
    GROUPCODE: string;
    TYPECODE: string;
    TYPECODE_FULL: string;
    ATTCODE: string;
    ATTRIBUTE: string;
    MATIRATYPECODE: string;
    D_UPDATE: string;
    CID_SAVECODE: string;
}

export class Matiral {
    OID: number;
    MATIRATYPECODE: string;
    MATIRALCODE: string;
    MATIRALCODE_FULL: string;
    DATE_SERV: string;
    MATIRALNAME: string;
    DETAIL: string;
    BRAND: string;
    SIZE: string;
    UNITCODE: string;
    CID: string;
    PARTYCODE: string;
    SUPPLY: string;
    SOURCE: string;
    MONEYTYPE: string;
    PRICE: string;
    PARTNERS: string;
    DISTRIBUTE: string;
    D_DISTRIBUTE: string;
    D_UPDATE: string;
    CID_SAVECODE: string;
    GROUPCODE: string;
    TYPECODE: string;
    ATTCODE: string;
    IMGS: string;
    SERIAL: string;
    END_DATE: string;
    ADDR: string;
    TOL: string;
    DOC: string;
}

export class M_mended {
    OID: number;
    MID: string;
    DATE_SERV: string;
    CID: string;
    PARTYCODE: string;
    ACTION: string;
    CID_ADMIN: string;
    COMMENT: string;
    SHEET: string;
    STATUS: string;
    EXPENS: string;
    D_SUCCESS: string;
    INVOICE: string;
    D_UPDATE: string;
    DATE_ADMIN: string;
    DATE_ADMINSERV: string;
}
export class C_pis_00024 {
    id: number;
    cid: string;
    fullname: string;
    id_ssjgroup: string;
    st: number;
    d_update: string;
}

export class Login {
    username: string;
    password: string;

}

export class C_company {
    id: number;
    id_company: string;
    name_company_th: string;
    name_company_en: string;
    typecom: string;
    address: string;
    tol: string;
    fax: string;
    cid_company: string;
    cid_save: string;
    d_update: string;
}

export class C_typecom {
    id: number;
    id_typecom: string;
    name_typecom: string;
    d_update: string;
}
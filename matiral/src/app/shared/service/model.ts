export class C_mcgroup {
    GROUPCODE: string;
    GROUPNAME: string;
    GROUPNAME_FULL: string;
    ST: number;
    D_UPDATE: string;
    CID_SAVECODE: string;
    stdel: number;

}

export class C_mctype {
    ID: string;
    GROUPCODE: string;
    TYPECODE: string;
    TYPENAME: string;
    TYPECODE_FULL: string;
    D_UPDATE: string;
    CID_SAVECODE: string;
    st: number;
    stdel: number;
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
    st: number;
    stdel: number;
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
    ream: string;
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
    cid_admin2: string;
    stz: string;
    stkam: string;
    cidad1: string;
    cidad2: string;
    cidad3: string;
    company: string;
    cidad4: string;
    stok: string;
    cidad5: string;
}
export class C_pis_00024 {
    id: number;
    cid: string;
    fullname: string;
    id_ssjgroup: string;
    st: number;
    conf: string;
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

export class C_pis {
    id: number;
    cid: string;
    pname: string;
    fname: string;
    lname: string;
    hcode: string;
    sex: string;
    c_groupssj: string;
    status: number;
    confirm: string;
    del: number;
    d_update: string;
}

export class C_unit {
    id_unit: number;
    name_unit: string;
    d_update: string;
    st: string;
    stdel: string;
}

export class C_distribute {
    id_distribute: number;
    name_distribute: string;
    d_update: string;
}
export class M_schedule {
    ID: number;
    URL: string;
    URLNAME: string;
    START_DATE: string;
    START_TIME: string;
    STATUS: string;
    STATUSROOM: string;
    GROUPSSJ: string;
    CID: string;
    HL: number;
    DEL: number;
    D_UPDATE: string;
}

export class M_youtube {
    ID: number;
    URL: string;
    URLNAME: string;
    GROUPSSJ: string;
    CID: string;
    HL: number;
    DEL: number;
    D_UPDATE: string;
}




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


export class Login {
    username: string;
    password: string;

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


export class Hst_register {
    id: number;
    id_room: string;
    cid: string;
    pname: string;
    fname: string;
    lname: string;
    hcode: string;
    comments: string;
    email: string;
    tol: string;
    lineid: string;
    urlroom: string;
    st: number;
    d_update: string;
}

export class Hst_room {
    id: number;
    namelist: string;
    timeon: string;
    dateon: string;
    urlroom: string;
    styh: string;
    stroom: string;
    groupsssj: string;
    cid: string;
    stdel: number;
    d_update: string;
}
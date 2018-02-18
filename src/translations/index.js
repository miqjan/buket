const translations = {
    en: {
        application: {
            header: {
                pages: {
                    agreement: 'Agreement',
                    payment: 'Payment',
                    delivery: 'Delivery',
                    about_as: 'About as',
                    questions: 'Questions'
                },
                info : 'Online shop in Armenia',
                setting: 'settings',
                auth: {
                    sign_in: 'Sign in',
                    sign_up: 'Sign up',
                    sign_out: 'Sign out',
                }
            },
            category: {
                name: 'Cotegories',
                filter: 'FILTER',
            },
            product: {
                more: 'more products',
                add_card : 'add to card',
            }
        },
    },
    ru: {
        application: {
            header: {
                pages: {
                    agreement: 'dogovor',
                    payment: 'oplata',
                    delivery: 'dostavka',
                    about_as: 'o nas',
                    questions: 'vaprosi',
                },
                info : 'online magazin v armeni',
                setting: 'nastroyki',
                auth: {
                    sign_in: 'vxod',
                    sign_up: 'registracia',
                    sign_out: 'viiyti',
                }
            },
            category: {
                name: 'категория',
                filter: 'FILTER',
            },
            product: {
                more: 'ubidet bolshe',
                add_card : 'dabavit b karzinu',
            }
        },
    },
    am: {
        application: {
            header: {
                pages: {
                    agreement: 'Համաձայնագիր',
                    payment: 'Վճարում',
                    delivery: 'Առաքում',
                    about_as: 'Մեր Մասին',
                    questions: 'Հարցեր',
                },
                info: 'Օնլայն խանութ Հայաստանում 24 ժամ',
                setting: 'kargavorumner',
                auth: {
                    sign_in: 'mutq',
                    sign_up: 'grancvel',
                    sign_out: 'Durs gal',
                }
            },
            category: {
                name: 'տեսականի',
                filter: 'FILTER',
            },
            product: {
                more: 'tesnel avelin',
                add_card : 'avelacnel zanbyuxum',
            }

        },
    },
};




export default (leng) => translations[leng];
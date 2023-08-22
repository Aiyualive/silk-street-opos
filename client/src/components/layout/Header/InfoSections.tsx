import React from "react";

export interface infoSectionsType {
    title: string
    path: string
    mobilePath: string
    component: React.ReactNode
}
const prefix = "/#";
export const poolInfoId = "poolinfo";
export const howToBuildId = "howtobuild";
// export const faqId = "faq";

export const linksId = "links";

export const todayId = "today";

export const infoSections: infoSectionsType[] = [
    // {
    //     title: "Today's ",
    //     path: prefix + poolInfoId,
    //     mobilePath: "poolinfo",
    //     component: <></>,
    // },
    {
        title: "Pool Info",
        path: prefix + poolInfoId,
        mobilePath: "poolinfo",
        component: <></>,
    },
    {
        title: "How To Build",
        path: prefix + howToBuildId,
        mobilePath: "howtobuild",
        component: <></>,
    },
    {
        title: "Links",
        path: prefix + linksId,
        mobilePath: "",
        component: <></>,
    },
    // {
    //     title: "Pitch",
    //     path: "pitch",
    //     mobilePath: "howtobuild",
    //     component: <></>,
    // },
    // {
    //     title: "Team",
    //     path: "team",
    //     mobilePath: "team",
    //     component: <></>,
    // },
    // {
    //     title: "BurgerDAO",
    //     path: "burgerdao",
    //     mobilePath: "burgerdao",
    //     component: <></>,
    // }
];
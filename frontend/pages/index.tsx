import type { NextPage } from "next";
import Image from "next/image";
import Overview from "../components/overview";
import Powerhouse from "../public/powerhouse-icon-colour.svg";
import Renown from "../public/renown-icon.svg";
import Fusion from "../public/fusion-icon.png";
import Academy from "../public/academy-icon.svg";
import Link from "next/link";

export interface Environment {
    production: {
        connect: string;
        switchboard: string;
        fusion?: string;
    };
    staging?: {
        connect: string;
        switchboard: string;
        fusion?: string;
    };
    develop?: {
        connect: string;
        switchboard: string;
        fusion?: string;
    };
}
const Home: NextPage = () => {
    const environmentKeys = ["Powerhouse", "Sky.money"] as const;
    type EnvironmentKey = (typeof environmentKeys)[number];

    const environments: Record<EnvironmentKey, Environment> = {
        Powerhouse: {
            production: {
                connect: "https://connect.phd",
                switchboard: "https://switchboard.phd",
                // fusion: "https://apps.powerhouse.io/powerhouse/fusion",
            },
            staging: {
                connect: "https://staging.connect.phd",
                switchboard: "https://staging.switchboard.phd",
                // fusion: "https://apps.powerhouse.io/staging/powerhouse/fusion",
            },
            develop: {
                connect: "https://apps.powerhouse.io/develop/powerhouse/connect/",
                switchboard: "https://apps.powerhouse.io/develop/powerhouse/switchboard",
            },
        },
        "Sky.money": {
            production: {
                connect: "https://connect.sky.money",
                switchboard: "https://switchboard.sky.money",
                fusion: "https://fusion.sky.money",
            },
            staging: {
                connect: "https://connect-staging.sky.money",
                switchboard: "https://switchboard-staging.sky.money",
                fusion: "https://fusion-staging.sky.money",
            },
        },
    };

    return (
        <div className="container mx-auto bg-white py-24 sm:py-32 flex flex-col gap-8">
            <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row gap-4">
                <Image src={Powerhouse} alt="Powerhouse" width="40" height="40" />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apps of Powerhouse</h2>
                {/* <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> */}
            </div>
            <div className="flex flex-row gap-4">
                <div className="relative flex items-center gap-x-4 px-12">
                    <Image width="32" height="32" alt="Sky.money" src={Renown} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <Link href={`https://www.renown.id`} target="_blank">
                                <span className="absolute inset-0"></span>
                                Renown
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="relative flex items-center gap-x-4 px-12">
                    <Image width="32" height="32" alt="Sky.money" src={Academy} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <span className="absolute inset-0"></span>
                            Academy
                        </p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-8">
                {environmentKeys.map((name) => (
                    <Overview name={name} key={name} env={environments[name]} />
                ))}
            </div>

            <div className="pl-16 pt-8 border-t border-gray-200 flex flex-col gap-4">
                <div className="relative flex items-center gap-x-4">
                    <Image width="25" height="25" alt="Sky.money" src={`/storybook.png`} className="h-8 w-8  bg-gray-50" />
                    <div className="text-sm">
                        <p className="font-semibold text-gray-900">
                            <Link href={`https://powerhouse-design-system.vercel.app/`} target="_blank">
                                <span className="absolute inset-0"></span>
                                Design System
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="relative flex items-center gap-x-4">
                    <Image width="25" height="25" alt="Sky.money" src={`/storybook.png`} className="h-8 w-8  bg-gray-50" />
                    <div className="text-sm">
                        <p className="font-semibold text-gray-900">
                            <Link href={`https://document-model-libs.vercel.app/`} target="_blank">
                                <span className="absolute inset-0"></span>
                                Document Model Libs
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;

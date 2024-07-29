import type { NextPage } from "next";
import Image from "next/image";
import Overview from "../components/overview";
import Powerhouse from "../public/powerhouse-icon-colour.svg";
import Renown from "../public/renown-icon.svg";
import Fusion from "../public/fusion-icon.png";
import Academy from "../public/academy-icon.svg";
import Link from "next/link";
const Home: NextPage = () => {
    return (
        <div className="container-fluid">
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-4xl   flex flex-col gap-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 flex flex-row gap-4">
                        <Image src={Powerhouse} alt="Powerhouse" width="40" height="40" />
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Apps of Powerhouse</h2>
                        {/* <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p> */}
                    </div>
                    <div className="grid lg:grid-cols-3 gap-x-8 grid-cols-1">
                        <div className="relative flex items-center gap-x-4 px-12">
                            <Image width="32" height="32" alt="MakerDAO" src={Renown} className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <Link href={`https://apps.powerhouse.io/renown`} target="_blank">
                                        <span className="absolute inset-0"></span>
                                        Renown
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="relative flex items-center gap-x-4 px-12">
                            <Image width="32" height="32" alt="MakerDAO" src={Academy} className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <span className="absolute inset-0"></span>
                                    Academy
                                </p>
                            </div>
                        </div>
                        <div className="relative flex items-center gap-x-4 px-12">
                            <Image width="32" height="32" alt="MakerDAO" src={Fusion} className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <span className="absolute inset-0"></span>
                                    Fusion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid mx-autogrid grid-cols-1 gap-8  lg:mx-0 lg:max-w-none lg:grid-cols-3 border-t border-gray-200">
                        <Overview name="Powerhouse" />
                        <Overview name="MakerDAO" />
                        <Overview name="Arbitrum" />
                    </div>
                    <div className="pl-16 pt-8 border-t border-gray-200 flex flex-col gap-4">
                        <div className="relative flex items-center gap-x-4">
                            <Image width="25" height="25" alt="MakerDAO" src={`/storybook.png`} className="h-8 w-8  bg-gray-50" />
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
                            <Image width="25" height="25" alt="MakerDAO" src={`/storybook.png`} className="h-8 w-8  bg-gray-50" />
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
            </div>
        </div>
    );
};

export default Home;

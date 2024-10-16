import Image from "next/image";
import Connect from "../public/connect-icon.svg";
import Switchboard from "../public/switchboard-icon.svg";
import Fusion from "../public/fusion-icon.png";
import Link from "next/link";
import { Environment } from "../pages";
export default function Overview({ name, env }: { name: string; env: Environment }) {
    return (
        <div className="flex flex-col gap-4 items-start px-12">
            <div className="group relative">
                <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"></span>
                    {name}
                </h3>
            </div>

            <div className="flex flex-row gap-8">
                {Object.keys(env).map((envName) => (
                    <div className="flex flex-col gap-4" key={envName}>
                        <div className="flex flex-0 ">
                            <h2 className="text-base font-semibold text-gray-900 ">{envName}</h2>
                        </div>
                        <div className="flex flex-col grow flex-1">
                            <div className="relative flex items-center gap-x-4">
                                <Image width="32" height="32" alt="MakerDAO" src={Connect} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-900">
                                        <Link href={env[envName].connect} target="_blank">
                                            <span className="absolute inset-0"></span>
                                            Connect
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="relative flex items-center gap-x-4">
                                <Image width="32" height="32" alt="MakerDAO" src={Switchboard} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm">
                                    <p className="font-semibold text-gray-900">
                                        <Link href={env[envName].switchboard} target="_blank">
                                            <span className="absolute inset-0"></span>
                                            Switchboard
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {env[envName].fusion && (
                                <div className="relative flex items-center gap-x-4">
                                    <Image width="32" height="32" alt="MakerDAO" src={Fusion} className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm">
                                        <p className="font-semibold text-gray-900">
                                            <Link href={env[envName].fusion} target="_blank">
                                                <span className="absolute inset-0"></span>
                                                Fusion
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

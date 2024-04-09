import Image from "next/image";
import Connect from "../public/connect-icon.svg";
import Switchboard from "../public/switchboard-icon.svg";
import Link from "next/link";
export default function Overview({ name }: { name: string }) {
    return (
        <div className="flex flex-col gap-4 max-w-xl items-start px-12">
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0"></span>
                    {name}
                </h3>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-0  w-3">
                    <h2 className="text-base font-semibold text-gray-900 -rotate-90">Prod</h2>
                </div>
                <div className="flex flex-col grow flex-1">
                    <div className="relative flex items-center gap-x-4">
                        <Image width="32" height="32" alt="MakerDAO" src={Connect} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm">
                            <p className="font-semibold text-gray-900">
                                <Link href={`https://apps.powerhouse.io/${name.toLocaleLowerCase()}/connect/`} target="_blank">
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
                                <Link href={`https://apps.powerhouse.io/${name.toLocaleLowerCase()}/switchboard`} target="_blank">
                                    <span className="absolute inset-0"></span>
                                    Switchboard
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-0  w-3">
                    <h2 className="text-base font-semibold text-gray-900 -rotate-90">Stage</h2>
                </div>
                <div className="flex flex-col grow flex-1">
                    <div className="relative flex items-center gap-x-4">
                        <Image width="32" height="32" alt="MakerDAO" src={Connect} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm">
                            <p className="font-semibold text-gray-900">
                                <Link href={`https://apps.powerhouse.io/alpha/${name.toLocaleLowerCase()}/connect/`} target="_blank">
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
                                <Link href={`https://apps.powerhouse.io/alpha/${name.toLocaleLowerCase()}/switchboard`} target="_blank">
                                    <span className="absolute inset-0"></span>
                                    Switchboard
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

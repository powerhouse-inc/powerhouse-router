import Image from "next/image";
import Connect from "../public/connect-icon.svg";
import Switchboard from "../public/switchboard-icon.svg";
export default function Overview({ name }: { name: string }) {
    return (
        <div className="flex flex-col gap-4 max-w-xl items-start ">
            <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                        <span className="absolute inset-0"></span>
                        {name}
                    </a>
                </h3>
            </div>
            <div className="relative flex flex-col ">
                <div className="relative flex items-center gap-x-4">
                    <Image width="32" height="32" alt="MakerDAO" src={Connect} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href={`https://apps.powerhouse.io/${name.toLocaleLowerCase()}/connect`}>
                                <span className="absolute inset-0"></span>
                                Connect
                            </a>
                        </p>
                    </div>
                </div>
                <div className="relative flex items-center gap-x-4">
                    <Image width="32" height="32" alt="MakerDAO" src={Switchboard} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            <a href={`https://apps.powerhouse.io/${name.toLocaleLowerCase()}/switchboard`}>
                                <span className="absolute inset-0"></span>
                                Switchboard
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

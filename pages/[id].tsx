import { useRouter } from "next/router";

if (typeof window !== "undefined") {
    window.addEventListener("popstate", () => {
        console.log("popstate event occurred. possible 'cancel rendering route' error will occur")
    })
}
export default function Id() {
    console.log("render id page")
    const router = useRouter();
    return "id page: " + router?.query?.id;
}

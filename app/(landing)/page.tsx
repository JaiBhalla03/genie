import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
    return (
        <div>
            Landing page
            <div>
                <Link href={'/sign-in'}>
                    <Button>Log in</Button>
                </Link>
            </div>
            <div>
                <Link href={'/sign-up'}>
                    <Button>Sign up</Button>
                </Link>
            </div>
        </div>
    )
}

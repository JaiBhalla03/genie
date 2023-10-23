"use client";
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import SideBar from "@/components/SideBar";

interface MobileSideBarProps{
    apiLimitCount: number;
}

const MobileSidebar: React.FC<MobileSideBarProps> = ({apiLimitCount}) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    }, []);
    if(!isMounted){
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={'ghost'} size={'icon'}
                        className={'md:hidden'}
                >
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className={'p-0'}>
                <SideBar apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
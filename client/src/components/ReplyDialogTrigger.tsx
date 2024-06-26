import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
    DrawerTitle
} from "@/components/ui/drawer"
import { MessagesSquare, SendHorizonal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "./ui/card";
import replyData from '@/data/replyData.json';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMediaQuery } from "usehooks-ts"

interface EventRegisterProps {
    children: React.ReactNode;
}

const ReplyDialogTrigger = ({ children }: EventRegisterProps) => {

    const matches = useMediaQuery('(min-width: 768px)')

    if (matches)
        return (
            <>
                <Dialog>
                    <DialogTrigger asChild>
                        {children}
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="flex">
                                Replies
                                <MessagesSquare size={24} className="mx-2" />
                            </DialogTitle>
                        </DialogHeader>
                        <div>
                            <ScrollArea className="h-96">
                            {
                                replyData.data.map(reply => (
                                    <>
                                    <Card className="my-2">
                                        <CardHeader>    
                                            <CardTitle className="flex items-center gap-2">
                                                <Avatar className="h-12 w-12" >
                                                    <AvatarImage src=""/>
                                                    <AvatarFallback className="font-light text-lg">
                                                        SM
                                                    </AvatarFallback>
                                                </Avatar>
                                                {reply.fullname}
                                            </CardTitle>
                                        </CardHeader>
                                        <div className="px-5 mb-5">
                                            {reply.comment}
                                        </div>
                                    </Card>
                                    </>
                                ))
                            }
                            </ScrollArea>

                            <div className="mt-4 mx-2 flex gap-2">
                                <Input placeholder="Reply" />
                                <Button><SendHorizonal /></Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </>
        )

    return (
        <Drawer>
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="flex">
                        Replies
                        <MessagesSquare size={24} className="mx-2" />
                    </DrawerTitle>
                </DrawerHeader>
                <div className="p-4">
                    <ScrollArea className="h-96">
                    {
                        replyData.data.map(reply => (
                            <>
                            <Card className="my-2">
                                <CardHeader>    
                                    <CardTitle className="flex items-center gap-2">
                                        <Avatar className="h-12 w-12" >
                                            <AvatarImage src=""/>
                                            <AvatarFallback className="font-light text-lg">
                                                SM
                                            </AvatarFallback>
                                        </Avatar>
                                        {reply.fullname}
                                    </CardTitle>
                                </CardHeader>
                                <div className="px-5 mb-5">
                                    {reply.comment}
                                </div>
                            </Card>
                            </>
                        ))
                    }
                    </ScrollArea>

                    <div className="mt-4 mx-2 flex gap-2">
                        <Input placeholder="Reply" />
                        <Button><SendHorizonal /></Button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ReplyDialogTrigger
import React from 'react';
import { X } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export const ProfileDialog = () => {
  const gravatarUrl = `https://gravatar.com/avatar/81db1417d343b4a2929be220a7853857?s=400&d=robohash&r=x`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-primary hover:text-primary-light transition-colors">by drew</button>
      </DialogTrigger>
      <DialogContent className="glass-card border-primary/20">
        <Button 
          variant="ghost" 
          className="absolute right-4 top-4 p-0 h-auto hover:bg-transparent"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
        </Button>
        <div className="p-4 flex gap-8">
          <Avatar className="w-32 h-32 shrink-0">
            <AvatarImage 
              src={gravatarUrl}
              alt="Drew's avatar"
            />
            <AvatarFallback delayMs={600}>DC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Hi, I'm drew..</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              multiversX OG, validator, godfather of the mvx Guardian, EGLDHeist, part of theFUCollective crew, creator of mxConsole, with more in the works.
              <br /><br />
              I believe strongly in sovereignty, accountability, and altruactions.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
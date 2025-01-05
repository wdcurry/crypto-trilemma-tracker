import React from 'react';
import { Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { ProfileDialog } from "./ProfileDialog";

export const FooterLinks = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'per AI: Internet-Scale Blockchains',
        url: window.location.href
      });
    } catch (err) {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="text-center text-muted-foreground py-6 border-t border-muted">
      <p className="text-sm mb-4">
        Made with ❤️{" "}
        <ProfileDialog />
        {" "}for the mofos at{" "}
        <a 
          href="https://twitter.com/ApeStaking" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary-light transition-colors"
        >
          @ApeStaking
        </a>
        ,{" "}
        <a 
          href="https://twitter.com/EGLDHeist" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary-light transition-colors"
        >
          @EGLDHeist
        </a>
        , &{" "}
        <a 
          href="https://twitter.com/theFUCollective" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:text-primary-light transition-colors"
        >
          @theFUCollective
        </a>
      </p>
      <div className="h-px w-48 bg-muted/50 mx-auto mb-6"></div>
      <div className="flex items-center justify-center gap-6 mb-4">
        <a 
          href="https://wallet.multiversx.com/unlock" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          tips & coffee money to herotag @drew
        </a>
        <div className="h-4 w-px bg-muted/50"></div>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-primary hover:bg-transparent"
          onClick={handleShare}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <div className="h-4 w-px bg-muted/50"></div>
        <span className="text-sm text-muted-foreground">version 0.1</span>
      </div>
    </div>
  );
};
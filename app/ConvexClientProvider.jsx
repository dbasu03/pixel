"use client";

import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";

// Replace this with your actual Convex deployment URL
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({children}) {
    return <ConvexProviderWithClerk client = {convex} useAuth={useAuth}>
        {children} 
        </ConvexProviderWithClerk>
}
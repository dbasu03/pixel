"use client";
import { Button } from '@/components/ui/button';
// Dashboard.jsx
import { DialogTrigger } from '@/components/ui/dialog';
import { api } from '@/convex/_generated/api';
import { useConvexQuery } from '@/hooks/use-convex-query';
import { useQuery } from 'convex/react';
import React from 'react';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { BarLoader } from 'react-spinners';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import NewProjectModal from './_components/new-project-modal';
import { ProjectGrid } from './_components/project-grid';

const Dashboard = () => {
    const [showNewProjectModal, setShowNewProjectModal] = useState(false);
    const {data:projects, isLoading} = useConvexQuery(api.projects.getUserProjects);
    console.log(projects);

  return (
    <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
              Your Projects
            </h1>
            <p className="text-white/70">
              Create and manage your AI-powered image designs
            </p>
                </div>
                 <Button
            onClick={() => setShowNewProjectModal(true)}
            variant="primary"
            size="lg"
            className="gap-2"
          >
            <Plus className="h-5 w-5" />
            New Project
          </Button>
            </div>
             {isLoading ? (
          <BarLoader width={"100%"} color="white"/>
        ) : projects && projects.length>0?(
            <ProjectGrid projects={projects}/>
        ):(
            <div className="flex flex-col items-center justify-center py-20 text-center">
                

      <p className="text-white/70 mb-8 max-w-md">
        Upload an image to start editing with our powerful AI tools, or create a
        blank canvas to design from scratch.
      </p>
      <Button
        onClick={()=> setShowNewProjectModal(true)}
        variant="primary"
        size="xl"
        className="gap-2"
      >
        <Sparkles className="h-5 w-5" />
        Start Creating
      </Button>
            </div>
        )
        }
        <NewProjectModal isOpen={showNewProjectModal}
                        onClose={()=> setShowNewProjectModal(false)}/>

        </div>
    </div>
  );
};

export default Dashboard;

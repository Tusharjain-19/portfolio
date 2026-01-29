
import React from 'react';
import { notFound } from 'next/navigation';
import { PORTFOLIO } from '@/data/portfolio';
import ProjectDetail from '@/components/ProjectDetail';
import Modal from '@/components/Modal';

export default async function ProjectModal({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug;
  const project = PORTFOLIO.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Modal>
      <ProjectDetail project={project} />
    </Modal>
  );
}

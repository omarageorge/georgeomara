import Project from '@/components/projects/project';
import { projects } from '@/lib/data';

const ProjectsList = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    {projects.map((project) => (
      <Project key={project.title} {...project} />
    ))}
  </div>
);

export default ProjectsList;

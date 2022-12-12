import { BiTask } from 'react-icons/bi';
import { TfiAgenda } from 'react-icons/tfi';
import { AiOutlineSchedule } from 'react-icons/ai';
import {
  MdOutlineSchool,
  MdOutlineEditNote,
  MdOutlineSchedule,
} from 'react-icons/md';

export const useFeatures = () => {
  const logo = {
    title: 'Planner',
    icon: <MdOutlineSchedule />,
    speech: [
      `Una herramienta para la organización del día a día.`,
      `Crea, edita, y revisa rápidamente tu horario y las actividades pendientes.`,
    ],
  };
  const features = [
    {
      title: 'Horario',
      description: `Administra tu horario escolar, agrega diferentes especificaciones
      para cada materia, tales como el nombre, calificaciones, aula, profesor, el horario, entre otras.`,
      icon: <AiOutlineSchedule />,
      path: '/schedule',
    },
    {
      title: 'Agenda',
      description: `Guarda tus eventos próximos, mantente al tanto de cuales están más cerca y recibe
      notificaciones de acuerdo a lo que sea mejor para ti. También puedes agregar eventos importantes 
      relacionados con tus materias (exámenes, tareas, etc.)`,
      icon: <TfiAgenda />,
      path: '/agenda',
    },
    {
      title: 'Tareas',
      description: `Organiza tus tareas pendientes, crea y edita una lista de aquellas que has completado
      y las que aún tienes que hacer. Es ideal para llevar un control de tus tareas y no olvidar ninguna.`,
      icon: <BiTask />,
      path: '/tasks',
    },
    {
      title: 'Apuntes',
      description: `Crea apuntes de clase, mantenlos guardados y organizados según la materia y el tema
      específico.`,
      icon: <MdOutlineEditNote />,
      path: '/notes',
    },
    {
      title: 'Carrera',
      description: `Mantente al tanto de tu progreso en la carrera, agrega tu plan de estudios para conocer
      las materias que ya has cursado, las que estás cursando y las que aún tienes que cursar.`,
      icon: <MdOutlineSchool />,
      path: '/carrer-path',
    },
  ];

  return { features, logo };
};

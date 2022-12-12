import { Subject } from 'interfaces/subject';
import {
  AiFillEdit,
  AiFillDelete,
  AiFillFolderAdd,
  AiFillDatabase,
} from 'react-icons/ai';

interface ScheduleOptions {
  optionName: string;
  action: Function;
  icon: JSX.Element;
}

export const useScheduleMenu = () => {
  function changeSchedule() {
    console.log('changing...');
  }

  function addSubject(subject: Subject) {
    console.log('creating...');
  }

  function editSubject() {
    console.log('editing...');
  }
  function deleteSubject() {
    console.log('deleting...');
  }

  const scheduleOptions: ScheduleOptions[] = [
    {
      optionName: 'Horarios',
      action: changeSchedule,
      icon: <AiFillDatabase />,
    },
    { optionName: 'Añadir', action: addSubject, icon: <AiFillFolderAdd /> },
    { optionName: 'Editar', action: editSubject, icon: <AiFillEdit /> },
    { optionName: 'Eliminar', action: deleteSubject, icon: <AiFillDelete /> },
  ];

  return { scheduleOptions };
};

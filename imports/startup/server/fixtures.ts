import { Meteor } from 'meteor/meteor';
import { Schools }  from '../../api/schools';
import { Classes } from '../../api/classes';
import { Schedules } from '../../api/Schedules';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  console.log('Startup Meteor on Server Side')
  if (Schools.find().count() === 0) {
    console.log('Initalising School data');
    
    const data = [
      {
        id: '1',
        name: 'Gudewerdt Schule',
        schooltype_id: 2,
        street: 'Pferdemarkt',
        city: 'Eckernförde',
        country: 'Schleswig-Holstein',
      },
      {
        id: '2',
        name: 'Peter Ustinov Schule',
        schooltype_id: 2,
        street: 'Sauerstraße',
        city: 'Eckernförde',
        country: 'Schleswig-Holstein',
      },
      
      {
        id: '3',
        name: 'Gemeinschaftsschule Friedrichsort',
        schooltype_id: 2,   
        street: 'Prieser Str.',
        city: 'Kiel Friedrichsort',
        country: 'Schleswig-Holstein',
      },
      {
        id: '4',
        name: 'Gemeinschaftsschule Altenholz',
        schooltype_id: 2,   
        street: 'Altenholzer Str.',
        city: 'Kiel Altenholz',
        country: 'Schleswig-Holstein',

      },
      {
        id: '5',
        name: 'Gymnasium',
        schooltype_id: 1, 
        street: 'Strasse',
        city: 'Kiel Altenholz',
        country: 'Schleswig-Holstein',     
      },

      {
        id: '6',
        name: 'Klaus-Groth Schule',
        schooltype_id: 2, 
        street: 'Winterbeker Weg 45',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '7',
        name: 'Max-Tau-Schule',
        schooltype_id: 2, 
        street: 'Odensestr. 6',
        city: 'Kiel Mettenhof',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '8',
        name: 'Herman-Löns-Schule',
        schooltype_id: 2, 
        street: 'Tiroler Ring 289',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '9',
        name: 'Ernst-Balach-Gymnasium',
        schooltype_id: 1, 
        street: 'Charles-Roß-Ring 53',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '10',
        name: 'Hebbelschule',
        schooltype_id: 1, 
        street: 'Feldstr. 177',
        city: 'Kiel Wik',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '11',
        name: 'Ricarda-Huch-Schule',
        schooltype_id: 1, 
        street: 'Hansastr. 69a',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '12',
        name: 'Kieler Gelehrtenschule',
        schooltype_id: 1, 
        street: 'Feldstr. 19',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '13',
        name: 'Humboldt-Schule',
        schooltype_id: 1, 
        street: 'Knooper Weg 63',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '14',
        name: 'Käthe-Kollwitz-Schule',
        schooltype_id: 1, 
        street: 'Paul-Fleming-Str. 1',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '15',
        name: 'Max-Planck-Schule',
        schooltype_id: 1, 
        street: 'Winterbeker Weg 1',
        city: 'Kiel',
        country: 'Schleswig-Holstein',     
      },
      {
        id: '16',
        name: 'Gymnasium Elmschenhagen',
        schooltype_id: 1, 
        street: 'Algäuer Str. 4711',
        city: 'Kiel Elmschenhagen',
        country: 'Schleswig-Holstein',     
      },
       { 
        id:'17', 
        name:'Jungmannschule', 
        schooltype_id: 1, 
        street: 'Sauerstr. 16', 
        city:'Eckernförde', 
        country:'Schleswig-Holstein',
      }
    ];

  
    data.forEach((School) => {
      // let schoolId: string = 'null';
        Schools.insert({
        _id: School.id,
        name: School.name,
        schooltype_id: School.schooltype_id,
        street: School.street,
        city: School.city,
        country: School.country
      });
    });

  }else{
    console.log('School data allready initialized');
  }


  if (Classes.find().count() === 0) {
    console.log('Initalising Class data');
    
    const data = [
      {
        id: '1',
        name: '6a',
        schoolId: '3'
      },
      {
        id: '2',
        name: '6b',
        schoolId: '3'
      },
      
      {
        id: '3',
        name: '6c',
        schoolId: '3'
      },

      {
        id: '4',
        name: '8a',
        schoolId: '9'
      },

    ];

  
    data.forEach((Class) => {
        Classes.insert({
        _id: Class.id,
        name: Class.name,
        schoolId: Class.schoolId,
      });
    });

  }else{
    console.log('Classes data allready initialized');
  }

if (Schedules.find().count() === 0) {
  console.log('Initalising Schedule data');
  
  const data = [
    {
      id: '6c_2018_2_MO_1',
      name: '6a',
      dayOfTheWeek: 'Montag',
      schoolYear: '2018',
      halfterm: 2,
      classId: '3',
      lessons:[{time:1, subject: 'Englisch', teacherId:'1' }, {time:2, subject: 'Mathe', teacherId:'2'},{time:3, subject: 'Sport', teacherId:'2'}],
    },
    {
      id: '6c_2018_2_MO_2',
      name: '6a',
      dayOfTheWeek: 'Dienstag',
      schoolYear: '2018',
      halfterm: 2,
      classId: '3',
      lessons:[{time:1, subject: 'Relegion', teacherId:'3' }, {time:2, subject: 'Deutsch', teacherId:'4'},{time:3, subject: 'HWS', teacherId:'5'}],
    },
    
  ];


  data.forEach((Schedule) => {
      Schedules.insert({
      _id: Schedule.id,
      name: Schedule.name,
      schoolYear: Schedule.schoolYear,
      dayOfTheWeek: Schedule.dayOfTheWeek,
      halfterm: Schedule.halfterm,
      classId: Schedule.classId,
      lessons: Schedule.lessons,
    });
  });

}else{
  console.log('Classes data allready initialized');
}
}
);

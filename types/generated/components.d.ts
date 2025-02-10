import type { Schema, Struct } from '@strapi/strapi';

export interface ScheduleTimeSchedule extends Struct.ComponentSchema {
  collectionName: 'components_schedule_time_schedules';
  info: {
    displayName: 'Schedule';
    icon: 'apps';
  };
  attributes: {
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    Schedule_date: Schema.Attribute.String;
    Schedule_time: Schema.Attribute.String;
    students: Schema.Attribute.Relation<'oneToMany', 'api::student.student'>;
    trainer: Schema.Attribute.Relation<'oneToOne', 'api::trainer.trainer'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'schedule-time.schedule': ScheduleTimeSchedule;
    }
  }
}

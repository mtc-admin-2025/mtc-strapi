import type { Schema, Struct } from '@strapi/strapi';

export interface EnrollmentsAssessmentEnroll extends Struct.ComponentSchema {
  collectionName: 'components_enrollments_assessment_enrolls';
  info: {
    description: '';
    displayName: 'Assessment Enroll';
    icon: 'user';
  };
  attributes: {
    Competency: Schema.Attribute.String;
    NCtier: Schema.Attribute.String;
    Students_Email: Schema.Attribute.String;
    Students_Name: Schema.Attribute.String;
    Type: Schema.Attribute.String;
  };
}

export interface EnrollmentsTrainingEnroll extends Struct.ComponentSchema {
  collectionName: 'components_enrollments_training_enrolls';
  info: {
    description: '';
    displayName: 'Training Enroll';
    icon: 'alien';
  };
  attributes: {
    Completion: Schema.Attribute.String;
    NCtier: Schema.Attribute.String;
    Students_Email: Schema.Attribute.String;
    Students_Name: Schema.Attribute.String;
    Type: Schema.Attribute.String;
  };
}

export interface ScheduleTimeSchedule extends Struct.ComponentSchema {
  collectionName: 'components_schedule_time_schedules';
  info: {
    description: '';
    displayName: 'Assessment Schedule';
    icon: 'apps';
  };
  attributes: {
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    Enrollments: Schema.Attribute.Component<
      'enrollments.assessment-enroll',
      true
    >;
    Schedule_date: Schema.Attribute.String;
    Schedule_Name: Schema.Attribute.String;
    Schedule_Price: Schema.Attribute.Decimal;
    Schedule_time: Schema.Attribute.String;
    Slot: Schema.Attribute.Integer;
    trainer: Schema.Attribute.Relation<'oneToOne', 'api::trainer.trainer'>;
  };
}

export interface ScheduleTimeTrainingSchedule extends Struct.ComponentSchema {
  collectionName: 'components_schedule_time_training_schedules';
  info: {
    description: '';
    displayName: 'Training Schedule';
    icon: 'database';
  };
  attributes: {
    course: Schema.Attribute.Relation<'oneToOne', 'api::course.course'>;
    Enrollments: Schema.Attribute.Component<
      'enrollments.training-enroll',
      true
    >;
    Schedule_date: Schema.Attribute.String;
    Schedule_Name: Schema.Attribute.String;
    Schedule_Price: Schema.Attribute.Decimal;
    Schedule_time: Schema.Attribute.String;
    Slot: Schema.Attribute.Integer;
    trainers: Schema.Attribute.Relation<'oneToMany', 'api::trainer.trainer'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'enrollments.assessment-enroll': EnrollmentsAssessmentEnroll;
      'enrollments.training-enroll': EnrollmentsTrainingEnroll;
      'schedule-time.schedule': ScheduleTimeSchedule;
      'schedule-time.training-schedule': ScheduleTimeTrainingSchedule;
    }
  }
}

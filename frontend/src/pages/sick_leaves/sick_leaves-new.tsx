import {
  mdiAccount,
  mdiChartTimelineVariant,
  mdiMail,
  mdiUpload,
} from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import CardBox from '../../components/CardBox';
import LayoutAuthenticated from '../../layouts/Authenticated';
import SectionMain from '../../components/SectionMain';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import { getPageTitle } from '../../config';

import { Field, Form, Formik } from 'formik';
import FormField from '../../components/FormField';
import BaseDivider from '../../components/BaseDivider';
import BaseButtons from '../../components/BaseButtons';
import BaseButton from '../../components/BaseButton';
import FormCheckRadio from '../../components/FormCheckRadio';
import FormCheckRadioGroup from '../../components/FormCheckRadioGroup';
import FormFilePicker from '../../components/FormFilePicker';
import FormImagePicker from '../../components/FormImagePicker';
import { SwitchField } from '../../components/SwitchField';

import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { RichTextField } from '../../components/RichTextField';

import { create } from '../../stores/sick_leaves/sick_leavesSlice';
import { useAppDispatch } from '../../stores/hooks';
import { useRouter } from 'next/router';
import moment from 'moment';

const initialValues = {
  start_date: '',

  end_date: '',

  diagnosis: '',

  instructions: '',

  document_url: '',

  visit: '',

  organizations: '',
};

const Sick_leavesNew = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (data) => {
    await dispatch(create(data));
    await router.push('/sick_leaves/sick_leaves-list');
  };
  return (
    <>
      <Head>
        <title>{getPageTitle('New Item')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title='New Item'
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='StartDate'>
                <Field
                  type='datetime-local'
                  name='start_date'
                  placeholder='StartDate'
                />
              </FormField>

              <FormField label='EndDate'>
                <Field
                  type='datetime-local'
                  name='end_date'
                  placeholder='EndDate'
                />
              </FormField>

              <FormField label='Diagnosis' hasTextareaHeight>
                <Field name='diagnosis' as='textarea' placeholder='Diagnosis' />
              </FormField>

              <FormField label='Instructions' hasTextareaHeight>
                <Field
                  name='instructions'
                  as='textarea'
                  placeholder='Instructions'
                />
              </FormField>

              <FormField label='DocumentURL'>
                <Field name='document_url' placeholder='DocumentURL' />
              </FormField>

              <FormField label='Visit' labelFor='visit'>
                <Field
                  name='visit'
                  id='visit'
                  component={SelectField}
                  options={[]}
                  itemRef={'visits'}
                ></Field>
              </FormField>

              <FormField label='organizations' labelFor='organizations'>
                <Field
                  name='organizations'
                  id='organizations'
                  component={SelectField}
                  options={[]}
                  itemRef={'organizations'}
                ></Field>
              </FormField>

              <BaseDivider />
              <BaseButtons>
                <BaseButton type='submit' color='info' label='Submit' />
                <BaseButton type='reset' color='info' outline label='Reset' />
                <BaseButton
                  type='reset'
                  color='danger'
                  outline
                  label='Cancel'
                  onClick={() => router.push('/sick_leaves/sick_leaves-list')}
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

Sick_leavesNew.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'CREATE_SICK_LEAVES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default Sick_leavesNew;

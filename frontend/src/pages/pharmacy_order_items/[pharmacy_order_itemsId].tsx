import { mdiChartTimelineVariant, mdiUpload } from '@mdi/js';
import Head from 'next/head';
import React, { ReactElement, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';

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
import { SelectField } from '../../components/SelectField';
import { SelectFieldMany } from '../../components/SelectFieldMany';
import { SwitchField } from '../../components/SwitchField';
import { RichTextField } from '../../components/RichTextField';

import {
  update,
  fetch,
} from '../../stores/pharmacy_order_items/pharmacy_order_itemsSlice';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';

import { hasPermission } from '../../helpers/userPermissions';

const EditPharmacy_order_items = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const initVals = {
    quantity: '',

    pharmacy_order: null,

    medication: null,

    organizations: null,
  };
  const [initialValues, setInitialValues] = useState(initVals);

  const { pharmacy_order_items } = useAppSelector(
    (state) => state.pharmacy_order_items,
  );

  const { currentUser } = useAppSelector((state) => state.auth);

  const { pharmacy_order_itemsId } = router.query;

  useEffect(() => {
    dispatch(fetch({ id: pharmacy_order_itemsId }));
  }, [pharmacy_order_itemsId]);

  useEffect(() => {
    if (typeof pharmacy_order_items === 'object') {
      setInitialValues(pharmacy_order_items);
    }
  }, [pharmacy_order_items]);

  useEffect(() => {
    if (typeof pharmacy_order_items === 'object') {
      const newInitialVal = { ...initVals };

      Object.keys(initVals).forEach(
        (el) => (newInitialVal[el] = pharmacy_order_items[el]),
      );

      setInitialValues(newInitialVal);
    }
  }, [pharmacy_order_items]);

  const handleSubmit = async (data) => {
    await dispatch(update({ id: pharmacy_order_itemsId, data }));
    await router.push('/pharmacy_order_items/pharmacy_order_items-list');
  };

  return (
    <>
      <Head>
        <title>{getPageTitle('Edit pharmacy_order_items')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={'Edit pharmacy_order_items'}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <FormField label='Quantity'>
                <Field type='number' name='quantity' placeholder='Quantity' />
              </FormField>

              <FormField label='PharmacyOrder' labelFor='pharmacy_order'>
                <Field
                  name='pharmacy_order'
                  id='pharmacy_order'
                  component={SelectField}
                  options={initialValues.pharmacy_order}
                  itemRef={'pharmacy_orders'}
                  showField={'status'}
                ></Field>
              </FormField>

              <FormField label='Medication' labelFor='medication'>
                <Field
                  name='medication'
                  id='medication'
                  component={SelectField}
                  options={initialValues.medication}
                  itemRef={'medications'}
                  showField={'name'}
                ></Field>
              </FormField>

              <FormField label='organizations' labelFor='organizations'>
                <Field
                  name='organizations'
                  id='organizations'
                  component={SelectField}
                  options={initialValues.organizations}
                  itemRef={'organizations'}
                  showField={'name'}
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
                  onClick={() =>
                    router.push(
                      '/pharmacy_order_items/pharmacy_order_items-list',
                    )
                  }
                />
              </BaseButtons>
            </Form>
          </Formik>
        </CardBox>
      </SectionMain>
    </>
  );
};

EditPharmacy_order_items.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'UPDATE_PHARMACY_ORDER_ITEMS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default EditPharmacy_order_items;

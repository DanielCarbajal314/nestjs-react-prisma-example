import { Form, Input } from 'antd';
import Modal from 'antd/es/modal';
import { useState, Dispatch, SetStateAction } from 'react';
import { useContactCreateMutation } from './useContactCreateMutation';

export type ContactModalProps = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type FieldType = {
    name: string;
    phone: string;
    email: string;
    post: string;
};

export function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
    const [form] = Form.useForm();
    const [formState, setFormState] = useState<FieldType>();
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const close = () => setIsOpen(false);
    const reset = () => {
        form.resetFields();
        setSubmitButtonDisabled(false);
        setFormState(undefined);
        close();
    };
    const { createContact } = useContactCreateMutation(reset);
    const okClick = () => {
        if (formState) {
            console.log(formState);
            setSubmitButtonDisabled(true);
            createContact(formState);
        }
    };
    return (
        <Modal
            title="Basic Modal"
            open={isOpen}
            onOk={okClick}
            onCancel={close}
            okButtonProps={{ disabled: submitButtonDisabled }}
        >
            <Form
                name="basic"
                form={form}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onValuesChange={(_, data) => setFormState(data)}
                autoComplete="off"
            >
                <Form.Item<FieldType> label="Name" name="name">
                    <Input />
                </Form.Item>
                <Form.Item<FieldType> label="Phone" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item<FieldType> label="Email" name="email">
                    <Input />
                </Form.Item>
                <Form.Item<FieldType> label="Post" name="post">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Modal>
    );
}

/// <reference types="react" />
import { FormProps, WithThemeProps } from '@rjsf/core';
import * as react from 'react';
import * as _rjsf_utils from '@rjsf/utils';
import { IconButtonProps } from '@rjsf/utils';

declare const Form: React.ComponentType<FormProps>;

declare function MoveDownButton(props: IconButtonProps): JSX.Element;
declare function MoveUpButton(props: IconButtonProps): JSX.Element;
declare function RemoveButton(props: IconButtonProps): JSX.Element;

declare const _default$1: {
    ArrayFieldItemTemplate: (props: _rjsf_utils.ArrayFieldTemplateItemType<any, any>) => JSX.Element;
    ArrayFieldTemplate: (props: _rjsf_utils.ArrayFieldTemplateProps<any, any>) => JSX.Element;
    BaseInputTemplate: ({ id, placeholder, required, readonly, disabled, type, label, value, onChange, onBlur, onFocus, autofocus, options, schema, rawErrors, uiSchema, children, extraProps, }: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
    ButtonTemplates: {
        AddButton: react.ComponentType<_rjsf_utils.IconButtonProps>;
        MoveDownButton: typeof MoveDownButton;
        MoveUpButton: typeof MoveUpButton;
        RemoveButton: typeof RemoveButton;
        SubmitButton: react.ComponentType<_rjsf_utils.SubmitButtonProps<any, any>>;
    };
    DescriptionFieldTemplate: ({ id, description }: _rjsf_utils.DescriptionFieldProps<any, any>) => JSX.Element | null;
    ErrorListTemplate: ({ errors }: _rjsf_utils.ErrorListProps<any, any>) => JSX.Element;
    FieldTemplate: ({ id, children, displayLabel, rawErrors, rawHelp, rawDescription, classNames, disabled, label, onDropPropertyClick, onKeyChange, readonly, required, schema, registry, }: _rjsf_utils.FieldTemplateProps<any, any>) => JSX.Element;
    ObjectFieldTemplate: ({ description, title, properties, required, uiSchema, idSchema, schema, formData, onAddClick, disabled, readonly, registry, }: _rjsf_utils.ObjectFieldTemplateProps<any, any>) => JSX.Element;
    TitleFieldTemplate: ({ id, title, uiSchema }: _rjsf_utils.TitleFieldProps<any, any>) => JSX.Element;
};

declare const Theme: WithThemeProps;

declare const _default: {
    CheckboxWidget: (props: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
    CheckboxesWidget: ({ schema, label, id, disabled, options, value, autofocus, readonly, required, onChange, onBlur, onFocus, }: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
    RadioWidget: ({ id, schema, options, value, required, disabled, readonly, label, onChange, onBlur, onFocus, uiSchema, }: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
    RangeWidget: (props: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
    SelectWidget: ({ schema, id, options, label, required, disabled, readonly, value, multiple, autofocus, onChange, onBlur, onFocus, placeholder, rawErrors, }: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
    TextareaWidget: ({ id, placeholder, value, required, disabled, autofocus, label, readonly, onBlur, onFocus, onChange, options, schema, rawErrors, uiSchema, }: _rjsf_utils.WidgetProps<any, any> & {
        options: any;
    }) => JSX.Element;
    FileWidget: (props: _rjsf_utils.WidgetProps<any, any>) => JSX.Element;
};

export { Form, _default$1 as Templates, Theme, _default as Widgets, Form as default };

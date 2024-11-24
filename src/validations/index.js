import * as yup from 'yup';

const gcsSchema = yup.object().shape({
    file_path: yup
        .string()
        .required("URI is required")
        .matches(
            /^gs:\/\/[^\s/$.?#].[^\s]*$/,
            "URI must start with 'gs://' and be a valid GCS path"
        ),
});

export { gcsSchema };

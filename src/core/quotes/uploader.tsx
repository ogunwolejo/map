import {Button} from '@/components/ui/button';
import {CardContent, Card} from '@/components/ui/card';
import {Separator} from '@radix-ui/react-separator';
import clsx from 'clsx';
import {FC, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Cloud from '@/assets/images/cloud.png';

const Uploader: FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<'loading' | 'idle'>('idle');

  // uploade validator
  const validateFile = async (file: File): Promise<string | null> => {
    const validTypes = [
      'image/svg+xml',
      'image/png',
      'image/jpeg',
      'image/gif',
    ];
    if (!validTypes.includes(file.type)) {
      return 'File type must be SVG, PNG, JPG, or GIF.';
    }

    // Create an image object to validate dimensions
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);
    img.src = objectUrl;

    return new Promise((resolve) => {
      img.onload = () => {
        if (img.width > 800 || img.height > 400) {
          resolve('Image dimensions must not exceed 800x400px.');
        } else {
          resolve(null);
        }
        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        resolve('Invalid image file.');
      };
    });
  };

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    const file = acceptedFiles[0];
    const validationError = await validateFile(file);

    if (validationError && validationError.length) {
      setError(validationError);
      setPreview(null);
    } else {
      setError(null);
      setPreview(URL.createObjectURL(file)); // Generate preview URL
      console.log('File is valid:', file);
    }
  };

  // Getting methods from the hook
  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: {
      'image/svg+xml': [],
      'image/png': [],
      'image/jpeg': [],
      'image/gif': [],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps({
        className:
          'dropzone flex flex-col justify-start items-start w-full p-1',
      })}
    >
      <div className="mb-4 lg:mb-6">
        <h6 className="font-semibold text-sm lg:text-base text-grey7">
          Attachment
        </h6>
        <p className="text-xs lg:text-sm tex-grey4 font-normal">
          Attach all necessary files or documents
        </p>
      </div>

      <Card className="border !border-dashed w-full">
        <CardContent className="pt-6">
          {preview && preview.length ? (
            <>
              <section className="flex flex-col justify-center items-center">
                <div
                  className={clsx(
                    'bg-[#F0F2F5]',
                    'flex items-center justify-center rounded-full p-4 text-gray-800 mb-4',
                  )}
                >
                  <img
                    src={preview}
                    alt=""
                    className="rounded-full object-cover h-full w-full"
                  />
                </div>
              </section>
            </>
          ) : (
            <section className="flex flex-col justify-center items-center">
              <div
                className={clsx(
                  'bg-[#F0F2F5]',
                  'flex items-center justify-center rounded-full p-4 text-gray-800 mb-4',
                )}
              >
                <img
                  src={Cloud}
                  alt=""
                  className="rounded-full object-cover h-full w-full"
                />
              </div>
              <input {...getInputProps()} className="hidden" />
              <div className="font-normal text-xs lg:text-sm text-grey6 space-x-1">
                <span className="text-primary font-medium">
                  Click to upload
                </span>
                <span>or</span>
                <span>drag and drop</span>
              </div>
              <p className="text-grey4 text-xs mt-1.5">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </p>
              <div className="flex justify-evenly items-center mt-2 lg:mt-4 ">
                <Separator className="bg-dark" orientation="horizontal" />
                <p className="font-semibold text-xs uppercase text-grey4">or</p>
                <Separator className="h-1" orientation="horizontal" />
              </div>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="!border-primary mt-4 !border-2 !text-primary !font-semibold !rounded-lg"
              >
                Browse Files
              </Button>
            </section>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Uploader;

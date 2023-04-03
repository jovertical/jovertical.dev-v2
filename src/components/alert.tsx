import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid';

import { XMarkIcon } from '@heroicons/react/20/solid';
import cx from 'classnames';
import * as React from 'react';
import { match } from '@/utils/object';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  level?: 'info' | 'success' | 'warning' | 'error';
  message: string;
  onClose?: () => void;
}

export default function Alert({
  level = 'info',
  message,
  onClose = () => {},
  className = '',
}: Props) {
  const Icon = React.useMemo(() => {
    return match(level, {
      info: InformationCircleIcon,
      success: CheckCircleIcon,
      warning: ExclamationTriangleIcon,
      error: XCircleIcon,
    });
  }, [level]);

  return (
    <div
      className={cx(
        'p-4 rounded-md',
        {
          'bg-blue-50': level === 'info',
          'bg-green-50': level === 'success',
          'bg-yellow-50': level === 'warning',
          'bg-red-50': level === 'error',
        },
        className
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon
            className={cx('w-5 h-5', {
              'text-blue-400': level === 'info',
              'text-green-400': level === 'success',
              'text-yellow-400': level === 'warning',
              'text-red-400': level === 'error',
            })}
          ></Icon>
        </div>

        <div className="ml-3">
          <p
            className={cx('text-sm font-medium', {
              'text-blue-800': level === 'info',
              'text-green-800': level === 'success',
              'text-yellow-800': level === 'warning',
              'text-red-800': level === 'error',
            })}
          >
            {message}
          </p>
        </div>

        <div className="pl-3 ml-auto">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={onClose}
              // prettier-ignore
              className={cx(
                'inline-flex rounded-md  p-1.5   focus:outline-none focus:ring-2 focus:ring-offset-2 ',
                {
                  'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50': level === 'info',
                  'bg-green-50 text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50': level === 'success',
                  'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50': level === 'warning',
                  'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50': level === 'error',
                }
              )}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="w-5 h-5"></XMarkIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

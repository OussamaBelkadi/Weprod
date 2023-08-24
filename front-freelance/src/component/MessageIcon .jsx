import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const MessageIcon = () => {
  const notifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
    { id: 3, message: 'Notification 3' },
  ];

  return (
    <Popover>
      <Popover.Button>
        <h1 className="text-white">notif</h1>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className="absolute z-10 right-0 mt-2 mr-24 w-56 bg-white rounded-md shadow-lg">
          <div className="p-4">
            {notifications.map((notification) => (
                
              <div key={notification.id}>
                <span className="rounded-full bg-gray-900 h-6 w-6 mr-4 mt-2"></span>
                {notification.message}

              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default MessageIcon;

import { useEffect } from 'react';
import { useStores } from '@/hooks/useStore';
import { guid } from '@/utils/RandomUtils';
import { message } from 'antd';
type PermissionProps = {
  children: React.ReactNode;
};
/**
 * 1.0.0 目前还是个雏形，只能判断用户是否登陆
 * @param props
 * @returns
 */
const Permission = (props: PermissionProps) => {
  const { userStore } = useStores();
  const uniqueId = guid();
  useEffect(() => {
    const permissions = document.getElementById(uniqueId);
    if (permissions) {
      register(permissions);
      return removeListener.bind(null, permissions);
    }
  });

  const handlePermission = (e: Event) => {
    if (!userStore.isLogin()) {
      message.error('请先登陆');
      e.stopPropagation();
    }
  };
  const register = (element: HTMLElement) => {
    element.addEventListener('click', handlePermission, true);
  };
  const removeListener = (element: HTMLElement) => {
    element.removeEventListener('click', handlePermission, true);
  };

  return (
    <>
      <div id={uniqueId}>{props.children}</div>
    </>
  );
};

export default Permission;

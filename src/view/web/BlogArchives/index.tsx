import { useEffect } from 'react';
import { Timeline as Time } from 'antd';

import { ClockCircleOutlined } from '@ant-design/icons';
import BlogContent from '../../../components/BlogContent';
import styles from './index.module.less';
import { observer } from 'mobx-react';

const BlogArchives = observer(() => {
  useEffect(() => {
    handleDispath();
  }, []);

  const handleDispath = () => {
    console.log('归档展示');
  };

  return (
    <>
        <div className="archives_box">
          <Time mode="alternate">
            {/* {props.archiveLines.map((item: TimeLine, index) => {
              let color = '';

              if (item.TimeLineStatus == 0) {
                color = 'red';
              } else if (item.TimeLineStatus == 1) {
                color = 'blue';
              } else {
                color = 'green';
              }
              return (
                <Time.Item
                  color={color}
                  dot={
                    color === 'blue' ? (
                      <ClockCircleOutlined style={{ fontSize: '16px' }} />
                    ) : null
                  }
                >
                  {item.TimeLineContent}
                </Time.Item>
              );
            })} */}
          </Time>
        </div>
    </>
  );
});

export default BlogArchives;

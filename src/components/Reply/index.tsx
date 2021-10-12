import { Comment, Form, Input, Button, message } from 'antd';
import { useState, useContext } from 'react';
import { addComment } from '@/api/v1/common/comment/add';
import { commentContext } from '@/view/web/BlogArticle';
const { TextArea } = Input;
type EditorProps = {
  onChange: (text: string) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
};
type ReplyProps = {
  replyId?: string;
  parentCid?: string;
  articleId?: string;
};
const Reply = (props: ReplyProps) => {
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const context = useContext(commentContext);
  const handleChange = (text: string) => {
    setValue(text);
  };

  const handleSubmit = async () => {
    const { replyId, parentCid, articleId } = props;
    setSubmitting(true);
    //请求添加评论接口
    //模拟
    const res = await addComment({
      content: value,
      replyTo: replyId,
      parentCid,
      articleId,
    });
    if (res === 1) {
      console.log(res, value, replyId, parentCid, articleId);
      //评论成功 toast提示用户
      message.success('评论成功', 2);
      //刷新页面
      context?.refresh((status) => !status);
    } else {
    }

    setSubmitting(false);
  };
  const renderAddComment = () => (
    <Comment
      // avatar={avatar}
      content={
        <Editor
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={value}
          submitting={submitting}
        />
      }
    />
  );
  return renderAddComment();
};

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => {
  const onFinish = () => {
    onSubmit();
    onChange('');
  };
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item
          name="value"
          rules={[
            {
              required: true,
              message: '至少8个字符，最多200个字符',
              type: 'string',
              min: 8,
              max: 200,
            },
          ]}
        >
          <TextArea
            rows={4}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button loading={submitting} type="primary" htmlType="submit">
            评论
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Reply;

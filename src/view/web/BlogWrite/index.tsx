// 编辑 / 视图
import { useState } from 'react';
import { Editor, Viewer } from '@bytemd/react';
import { observer } from 'mobx-react';
import { Tag as QueryTag } from '@/types/common/tag';
import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight-ssr';
import mediumZoom from '@bytemd/plugin-medium-zoom';
import { useStores } from '../../../hooks/useStore';
import gemoji from '@bytemd/plugin-gemoji';
import { useHistory } from 'react-router';
import { queryTagByName } from '@/api/v1/common/tag';
import { queryCateByName } from '@/api/v1/common/category';
// 引入中文包
import zhHans from 'bytemd/lib/locales/zh_Hans.json';
import {
  Form,
  Button,
  Row,
  Col,
  Modal,
  Tag,
  Input,
  Select,
  message,
} from 'antd';
// 引入基础css
import 'bytemd/dist/index.min.css';
// 引入高亮css
import 'highlight.js/styles/vs.css';
import styles from './index.module.less';
import { publishArticle } from '@/api/v1/common/article/index';
import { Tag as ArticleTag } from '@/types/common/tag';
import { Category, defaultCategory } from '@/types/common/category';
import './index.css';
export const plugins = [gfm(), gemoji(), highlight(), mediumZoom()];

const BlogWrite = observer(() => {
  const { userStore } = useStores();
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const [tagInputValue, setTagInputValue] = useState('');
  const [abstractContent, setAbstract] = useState('');
  const [tags, setTags] = useState<ArticleTag[]>([]);
  const [category, setCategory] = useState('');
  const [urlVisible, setUrlVisible] = useState(false);
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    await publishArticle({
      articleTitle: form.getFieldValue('articleTitle'),
      articleContent: value,
      articleType: form.getFieldValue('articleType'),
      articleCategories: category,
      articleUrl: form.getFieldValue('articleUrl'),
      articleTabloid: abstractContent,
      articleTags: tags,
    });

    setVisible(false);
  };

  const back = () => {
    history.goBack();
  };
  const handleCateInputBlur = async () => {
    const categoryName = form.getFieldValue('articleCategories') as string;
    const queryCate: Category = await queryCateByName({ categoryName });
    if (!queryCate) {
      form.setFieldsValue({
        articleCategories: '',
      });
      return;
    }
    setCategory(categoryName);
  };
  const handleTagInputBlur = async () => {
    const tagName = form.getFieldValue('tag') as string;

    //判断标签是否存在
    const queryTag: QueryTag = await queryTagByName({ tagName: tagName });

    if (!queryTag) {
      return;
    } else {
      //判断标签唯一性
      let hasJoin = false;
      tags.forEach((item) => {
        if (item.tagName === tagName) {
          hasJoin = true;
        }
      });

      if (hasJoin) {
        return;
      }

      //加入标签
      const arr = tags.slice();

      arr.push(queryTag);
      console.log(arr);

      setTags(arr);
      //重制tagName
      form.setFieldsValue({
        tag: '',
      });
    }
  };

  // const handleTagInputEnter = () => {
  //   tags.push(form.getFieldValue('tag'));

  //   setTags(tags.slice());

  //   form.setFieldsValue({
  //     tag: '',
  //   });
  // };

  const handleCloseTag = (position: number) => {
    const arr = tags.slice();
    arr.splice(position, 1);
    setTags(arr);
  };
  const handleChangeType = (value: string) => {
    if (value === '转载') {
      setUrlVisible(true);
    } else {
      setUrlVisible(false);
    }
    console.log(value);
  };
  return (
    <>
      <Row
        justify="end"
        className={styles['write-header']}
        gutter={24}
        align="middle"
      >
        <Col className={styles['abstract-box']} span={17}>
          <label className={styles['abstract']} htmlFor="abstract-input">
            文章摘要:
          </label>
          <Input
            id="abstract-input"
            value={abstractContent}
            onChange={(e) => setAbstract(e.target.value)}
          />
        </Col>
        <Col span={2}>
          <Button danger={true} onClick={() => setVisible(true)}>
            发布文章
          </Button>
        </Col>
        <Col span={2}>
          <Button type="primary" ghost={true}>
            保存草稿
          </Button>
        </Col>
        <Col span={2}>
          <Button type="default" onClick={back}>
            返回
          </Button>
        </Col>
      </Row>

      <Editor
        locale={zhHans}
        value={value}
        plugins={plugins}
        onChange={(v) => {
          setValue(v);
        }}
      />

      <Modal
        visible={visible}
        centered
        keyboard={true}
        destroyOnClose={true}
        mask={true}
        maskClosable={true}
        onOk={() => form.submit()}
        onCancel={() => setVisible(false)}
        cancelText="取消"
        okText="发布文章"
        title="发布文章"
      >
        <Form
          form={form}
          name="publish-form"
          preserve={false}
          layout="horizontal"
          onFinish={onFinish}
        >
          <Row>
            <Col>
              <Form.Item
                label="文章标题"
                name="articleTitle"
                rules={[
                  {
                    pattern: /.+/,
                    required: true,
                    message: '标题不能为空,',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row wrap={true} align="top">
            <Col>
              <Form.Item
                label="文章标签"
                name="tag"
                rules={[
                  {
                    required: false,
                  },
                ]}
              >
                <Input
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={tagInputValue}
                  onBlur={handleTagInputBlur}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              {tags.map((item, index) => {
                return (
                  <Tag
                    key={item.tagName + index}
                    closable={true}
                    onClose={() => handleCloseTag(index)}
                  >
                    {item.tagName}
                  </Tag>
                );
              })}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="文章分类"
                name="articleCategories"
                rules={[
                  {
                    pattern: /.+/,
                    required: true,
                    message: '分类不能为空',
                  },
                ]}
              >
                <Input onBlur={handleCateInputBlur} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                name="articleType"
                label="文章类型"
                initialValue="原创"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select onChange={handleChangeType}>
                  <Select.Option value="原创">原创</Select.Option>
                  <Select.Option value="转载">转载</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          {urlVisible === true ? (
            <>
              <Row>
                <Col>
                  <Form.Item
                    name="articleUrl"
                    label="文章转载地址"
                    rules={[
                      {
                        pattern:
                          /^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/,
                        required: true,
                        message: '请输入正确的网址',
                      },
                    ]}
                  >
                    <Input placeholder="请输入正确的网址" />
                  </Form.Item>
                </Col>
              </Row>
            </>
          ) : (
            ''
          )}
        </Form>
      </Modal>
    </>
  );
});

export default BlogWrite;

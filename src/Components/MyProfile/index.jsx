import { Container } from "../Properties/style";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { AntTable, Button, Icons, User, Wrapper } from "./style";
import noimg from "../../assets/img/noimg1.jpg";
import { useQuery } from "react-query";
import { message } from "antd";

const MyProfile = () => {
  // const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  // useEffect(() => {
  //   request({ url: `/houses/me`, token: true }).then(
  //     (res) => setData(res?.data || [])

  //     // request({ url: `/houses/list${search}` }).then((res) =>
  //     //   setData(res?.data || [])
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [search]);

  const { data, refetch } = useQuery([search], () => {
    return request({ url: `/houses/me`, token: true });
  });

  const onDelete = (id) => {
    return request({
      url: `/houses/${id}`,
      token: true,
      method: "DELETE",
    }).then((res) => {
      if (res?.success) {
        message.info("Successfully deleted");
        refetch();
      }
    });
  };

  const columns = [
    {
      title: "Listing Title",
      key: "name",
      render: (data) => (
        <User>
          <User.Img
            src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          />
          <User flex left>
            <div className="subTitle">
              {data?.country} {data?.address || "no address"}
            </div>
            <div className="info">
              {data?.city} {data?.region}
            </div>
            <User flex mt={"auto"}>
              <div className="info">
                <del>${data?.price}</del>
              </div>
              <div className="subTitle">${data?.salePrice}</div>
            </User>
          </User>
          <Button>FOR SALE</Button>
        </User>
      ),
    },
    {
      title: "Date Published",
      render: (data) => <span>{data.houseDetails.yearBuilt}</span>,
      key: "houseDetails.yearBuilt",
      width: 150,
    },
    {
      title: "Email",
      render: (data) => <span>{data.user.email}</span>,
      key: "email",
    },
    {
      title: "Price",
      key: "price",
      render: (data) => <span> $ {data.salePrice}</span>,
      width: 150,
    },
    {
      title: "Action",
      key: "price",
      width: 100,
      render: (data) => {
        return (
          <User>
            <Icons.Edit
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/myprofile/edithouse/${data?.id}`);
              }}
            />
            <Icons.Delete
              onClick={(event) => {
                event.stopPropagation();
                onDelete(data?.id);
              }}
            />
          </User>
        );
      },
    },
  ];

  return (
    <Wrapper>
      <User>
        <Container style={{ textAlign: "start" }} className="title">
          My properties
        </Container>{" "}
        <Container style={{ textAlign: "start" }} className="title">
          <Button mw he onClick={() => navigate("/myprofile/newhouse")}>
            Add House
          </Button>
        </Container>
      </User>
      <Container>
        <AntTable
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                navigate(`/properties/${record?.id}`);
              },
            };
          }}
          dataSource={data?.data}
          columns={columns}
        />
      </Container>
    </Wrapper>
  );
};

export default MyProfile;

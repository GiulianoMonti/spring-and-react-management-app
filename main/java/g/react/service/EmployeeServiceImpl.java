package g.react.service;

import g.react.model.Employee;
import g.react.model.dto.PageDto;
import g.react.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeServiceImpl implements IEmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;


    @Override
    public PageDto<Employee> getPageableCategory(Pageable pageable, HttpServletRequest request) {

        Map<String,String> links = new HashMap<>();

        PageDto<Employee> pageDto = new PageDto<>();

        Page<Employee> pageList = employeeRepository.findAll(pageable);

        List<Employee> responseDto = new ArrayList<>();
//        pageList.getContent().forEach(element -> responseDto.add
//                (mapper.map(element,CategoryListRespDto.class)));

        links.put("next",pageList.hasNext()?makePaginationLink(request,pageable.getPageNumber()+1):"");
        links.put("previous",pageList.hasPrevious()?makePaginationLink(request,pageable.getPageNumber()-1):"");

        pageDto.setLinks(links);
        pageDto.setContent(pageList);
        return pageDto;


    }
    private String makePaginationLink(HttpServletRequest request, int page) {
        return String.format("%s?page=%d", request.getRequestURI(), page);
    }


}
